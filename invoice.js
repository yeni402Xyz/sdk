function createInvoice(amount) {
  return { amount, id: "inv_" + Date.now() };
}

module.exports = { createInvoice };
