function settle(payment) {
  return { status: "settled", payment };
}

module.exports = { settle };
