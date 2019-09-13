

const Validation = require('validatorjs');
const { Card } = require('../models');
const rules = {
    author: 'required',
    page: 'integer',
    page_size: 'integer',
}

const validate = (params) => {
    const validation = new Validation(params, rules)
    return {
        success: validation.passes(),
        messages: validation.errors.all(),
    }
}
module.exports = async (params) => {
    const valid = validate(params);
    if (!valid.success) {
        return {
            success: valid.success,
            messages: valid.errors.all(),
            code: 422,
        }
    }
    const { 
        author,
        page = 1,
        page_size: pageSize = 10,
    } = params;

    const cardList = await new Card().where({ author }).fetchPage({
        page,
        pageSize,
    })
    console.log('>>cardList: ', cardList);
    if (cardList.length < 1) {
        return {
            success:false,
            message: 'Not Found card of this author: ' + author,
            code: 404,
            data: null,
        }
    }
    return {
        success: true,
        message: 'SUCCESS',
        code: 200,
        data: cardList.toJSON(),
    }

}