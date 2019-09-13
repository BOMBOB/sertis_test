

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
        messages: validation.errors
    }
}
module.exports = async (params) => {
    const validate = validate(params);
    if (!validate.success) {
        return {
            success: validate.success,
            messages: validate.errors,
        }
    }
    const { 
        author,
        page = 1,
        page_size: pageSize = 10,
    } = params;

    const cardList = await new Card().where({author}).fetchPage({
        page,
        pageSize,
    })
    console.log('>>cardList: ', cardList);
    return {
        success: true,
        message: 'SUCCESS',
        code: 200,
        data: cardList.toJSON(),
    }

}