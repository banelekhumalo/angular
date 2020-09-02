export class Product {
  id:number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
    constructor(id, name, description='', price=0, imageUrl='https://bloximages.chicago2.vip.townnews.com/kansan.com/content/tncms/assets/v3/editorial/e/53/e531c8ec-b70e-11e4-8607-cf0042f5929a/54e3ed64ce6ab.image.jpg?resize=512%2C364')
    {
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imageUrl = imageUrl
    }

}
