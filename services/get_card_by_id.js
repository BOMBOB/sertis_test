

const Validation = require('validatorjs');
const { Card } = require('../models');
const rules = {
    author: 'required',
    id: 'integer',
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
        id,
    } = params;

    const card = await new Card().where({ id, author }).fetch();
    console.log('>>card: ', card);
    if (!card) {
        return {
            success:false,
            message: `Not Found card of this author: ${author} || id: ${id}`,
            code: 404,
            data: null,
        }
    }
    return {
        success: true,
        message: 'SUCCESS',
        code: 200,
        data: card.toJSON(),
    }

}