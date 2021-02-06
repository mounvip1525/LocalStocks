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
    const { id , title , img , price , total , count } = item;
    const { increment , decrement , removeItem } =value;
    return (
        <div class="media cartItem mb-3">
            <img class="mr-3" src={img} style={{width:"10rem",height:"10rem",objectFit:"cover"}} alt="product"   />
            <div class="media-body">
                <h5 class="mt-0">{title}</h5>
                <h5 class="mt-0">{price}</h5>
                <h5 class="mt-0">{total}</h5>
                <h5 class="mt-0">{title}</h5>

            </div>
        </div>
    )
}
