module.exports = class Products {
  static  index(request, response){
    response.send(
      [
        {"_id":{"$oid":"5efe5f07dbef99b3bde32ca9"},"name":"Mustang","maker":"Ford","car_type":"Affordable","price_mxn":{"$numberInt":"869000"},"price_usd":{"$numberDouble":"34669.99"},"description_es":"Auto deportivo económico","description_en":"Affordable Sports Car","models":["Red","Black","Gray"]},
        {"_id":{"$oid":"5efe620bdbef99b3bde32cad"},"name":"Supra","maker":"Toyota","car_type":"Luxury","price_mxn":{"$numberInt":"1074750"},"price_usd":{"$numberInt":"42990"},"description_es":"Auto deportivo de lujo","description_en":"Luxury Sports Car","models":[]}
      ]
    )
  }
}