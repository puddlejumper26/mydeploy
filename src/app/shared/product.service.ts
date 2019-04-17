import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // 这里的products的类型是Product数组[]
  private products: Product[] = [
    new Product(1, '1st Product', 1.99, 3.5, 'This is the 1st product, which is used for display', ['Electronics', 'Hardware']),
    new Product(2, '2nd Product', 2.99, 2.5, 'This is the 2nd product, which is used for display', ['Books']),
    new Product(3, '3rd Product', 3.99, 4.5, 'This is the 3rd product, which is used for display', ['Hardware']),
    new Product(4, '4th Product', 4.99, 1.5, 'This is the 4th product, which is used for display', ['Electronics', 'Hardware']),
    new Product(5, '5th Product', 5.99, 3.5, 'This is the 5th product, which is used for display', ['Electronics']),
    new Product(6, '6th Product', 6.99, 2.5, 'This is the 6th product, which is used for display', ['Books'])
  ]

  private comments:Comment[]=[
    new Comment(1, 1, "2019-02-02 22:22:22", "Peter", 3, "Not bad"),
    new Comment(2, 1, "2019-02-02 22:22:22", "Peter2", 4, "Not bad"),
    new Comment(3, 1, "2019-02-02 22:22:22", "Peter3", 2, "good"),
    new Comment(4, 2, "2019-02-02 22:22:22", "Peter4", 1, "bad"),
  ]
  constructor() { }

  getProducts(){return this.products;}
  getProduct(id:number):Product{return  this.products.find((product)=>product.id==id);}
  getCommentsForProductId(id:number):Comment[]{
  return this.comments.filter((comment:Comment)=>comment.productId==id);  
  }
}

// 2.8 有一个对象来封装产品信息
export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {
  }
}

export class Comment{
  constructor(
    public id:number,
    public productId:number,
    public timestamp:string,
    public user:string,
    public rating:number,
    public content:string
  ){}
}