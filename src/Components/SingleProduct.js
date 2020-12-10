import React from 'react'
import { useParams } from 'react-router-dom';

function SingleProduct() {
    const shoes = {
        'nike-adapt-bb-shoes': {
            name: "Nike's Adapt BB Shoes",
            img: 'https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682'
        },
        'nike-selflacing-bb-shoes': {
            name: "Nike's SelfLacing BaseBall Shoes",
            img: 'https://media.wired.com/photos/5c7082419d5bf17d94aac203/191:100/w_2400,h_1256,c_limit/Topo-Athletic-Ultraventure_2.jpg'
        },
        'rsx-prism-shoes': {
            name: 'RSX Prism Shoes',
            img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/374758/03/sv01/fnd/IND/fmt/png/RS-X-Prism-Shoes'
        },
        'ghost-12': {
            name: 'Ghost 12',
            img: 'https://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dw9c3a4394/images/ProductImages/120305/120305_414_l_WR.jpg?sw=900'
        },
        'adidas-puremotion-shoes': {
            name: 'ADIDAS PureMotion Shoes',
            img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a1fa93dbcecd4671b6a8aba400aa0357_9366/Puremotion_Shoes_White_FW3264_01_standard.jpg'
        },
        'nmd-r1-shoes': {
            name: 'NMD R1 Shoes',
            img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/73101ab9d9ee445db281ab57011a0229_9366/NMD_R1_Shoes_Blue_FV1734_01_standard.jpg'
        },
        'nmd-r1-shoes-black': {
            name: 'NMD R1 Black Shoes',
            img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/0b49803254284e418fccaaf00111954c_9366/NMD_R1_Shoes_Black_FV9015_01_standard.jpg'
        },
        'vans-old-school': {
            name: 'VANS Old School',
            img: 'https://footwearnews.com/wp-content/uploads/2016/03/vans-old-skool.jpg'
        },
        'vans-old-school-classic': {
            name: 'Classic VANS Old School',
            img: 'https://images.vans.com/is/image/VansEU/VN0A38G1R1Q-HERO?$PDP-FULL-IMAGE$'
        },
    };

    const {id} =useParams();
    const product = shoes[id];
    return (
        <div style={{marginTop:'30px'}}>
            <h1>YOUR PRODUCT</h1>
            <img className="singleImg" src={product.img} alt="Not Found" />
            <h1 style={{marginTop:'20px'}}>{product.name}</h1>
        </div>
    )
}

export default SingleProduct;
