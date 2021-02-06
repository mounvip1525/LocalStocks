// import React from 'react'

// export default function CartItem({item,value}) {
//     const { id , title , img , price , total , count } = item;
//     const { increment , decrement , removeItem } =value;
//     return (
//         <div className="row my-2 text-capitalize text-center cartItem">
//             <div className="col-10 mx-auto col-lg-2">
//                 <img src={img} style={{width:"10rem",height:"10rem",objectFit:"cover"}} className="img-fluid" alt="product" />
//             </div>
//            <div className="col-10 mx-auto col-lg-2">
//                <span className="d-lg-none">product : </span>{title}
//            </div>
//            <div className="col-10 mx-auto col-lg-2">
//                <span className="d-lg-none">price : </span>$ {price}
//            </div>
//            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
//                <div className="d-flex justify-content-center">
//                    <div>
//                        <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
//                        <span className="btn btn-black mx-1">{count}</span>
//                        <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
//                    </div>
//                </div>
//            </div>
//            <div className="col-10 mx-auto col-lg-2">
//                <div className="cart-icon" onClick={()=>removeItem(id)}><i className="fa fa-trash" /></div>
//            </div>
//            <div className="col-10 mx-auto col-lg-2">
//                <strong>item total : $ {total}</strong>
//            </div>
//         </div>
//     )
// }






import React from 'react'

export default function CartItem({item,value}) {
    const { id , title , img , price , total , count , info } = item;
    const { increment , decrement , removeItem } =value;
    console.log(id)
    return (
        <div className="cartItem ml-3 py-3 px-3 pb-4">
            <div className="cart-heading">
                <h3>{title}</h3>
                <p className="mt-2">Price-  <strong>$ {price}</strong></p>
            </div>
            <div className="media mb-3">
            <img className="mr-3" src={img} style={{width:"12rem",height:"12rem",objectFit:"cover"}} alt="product"   />
            <div className="media-body">
                <div className="container-fluid d-lg-block">
                    <div className="row">
                        <div className="col-10 mx-auto col-lg-8">
                            <h5 className="text-muted text-capitalize">{info}</h5>
                            <div className="button-count"> 
                                <span className="btn btn-black" onClick={()=>decrement(id)}>-</span>
                                <span className="btn btn-black center-button">{count}</span>
                                <span className="btn btn-black" onClick={()=>increment(id)}>+</span>
                            </div>
                            <div className="d-flex">
                                <div className="cart-icon mt-3" onClick={()=>removeItem(id)}>Delete{" "}<i className="fa fa-trash" /></div>
                                <h5 className="mt-3">Save for later</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="cart-footer">
                <h5 className="mt-0">Subtotal ({count} items)-  <strong>$ {total}</strong></h5>
            </div>
        </div>
    )
}
