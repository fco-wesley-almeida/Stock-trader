export default function (product, request) {
  const reqOperation = request.operation
  const attribute = request.attribute
  const reqNewAttributeValue = request.product[attribute]

  if (reqOperation) {
    product[attribute] += (reqOperation * reqNewAttributeValue)
  } else {
    product[attribute] = reqNewAttributeValue
  }
  return product
}
