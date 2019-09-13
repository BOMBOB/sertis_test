



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
    console.log('>>validate error: ', validation)
    return {
        success: validation.passes(),
        messages: validation.errors.all()
    }
}
module.exports = async (params) => {
    const valid = validate(params);
    if (!valid.success) {
        return {
            success: valid.success,
            messages: valid.messages,
        }
    }
    const { 
        author,
        name = '',
        status = '',
        content = '',
        category = '',
    } = params;
    try {
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
    } catch (error) {
        console.error(error);
        return {
            success:false,
            message: error,
            code: 500,
            data: null,
        }
    }
   

}