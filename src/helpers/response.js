// ===== Response
module.exports = (res, status, success, message, results, ...optionalProperty) => {
  const [prevPageLink, nextPageLink] = optionalProperty

  if (results) {
    return res.status(status).json({
      success,
      message,
      results,
      pageInfo: {
        totalData: results.length,
        previousPageLink: optionalProperty ? prevPageLink : null,
        nextPageLink: optionalProperty ? nextPageLink : null
      }
    })
  } else {
    return res.status(status).json({
      success,
      message
    })
  }
}
