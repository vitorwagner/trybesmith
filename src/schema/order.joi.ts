import Joi from 'joi';

const orderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number().min(1)).min(1).required()
    .label('productsIds'),
}).messages({
  'array.min': '{{#label}} must include only numbers',
});

export default orderSchema;