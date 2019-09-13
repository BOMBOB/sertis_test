



const Validation = require('validatorjs');
const { Card } = require('../models');
const rules = {
    author: 'required',
    name: 'required',
    status: 'required|in:yes,no',
    content: 'required',
    category: 'required',
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
        name = '',
        status = '',
        content = '',
        category = '',
    } = params;

    const card = await new Card({
        author,
        name,
        status,
        content,
        category,
    }).save(null, { method: 'insert' })
    console.log('>>cardList: ', card);
    return {
        success: true,
        message: 'SUCCESS',
        code: 200,
        data: card.toJSON(),
    }

}