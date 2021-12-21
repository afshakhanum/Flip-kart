import Header from './components/header';
import Categories from './components/categories';
import Box1 from './components/box1';
import Box2 from "./components/box2";
import Mobile1 from './components/mobile1';
import Carousel from './components/carousel';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <div className="box1">
     <Categories src="https://rukminim1.flixcart.com/flap/128/128/image/e09286c6edd281d0.png?q=100" text="Mobiles"/>
     <Categories src="https://rukminim1.flixcart.com/flap/128/128/image/e7d30211bbb602cc.png?q=100" text="Fashion" />
     <Categories src="https://rukminim1.flixcart.com/flap/128/128/image/c5a1aae989f3aac4.png?q=100" text="Electronics" />
     <Categories src="https://rukminim1.flixcart.com/flap/128/128/image/6214910e86384399.png?q=100" text="Home" />
     <Categories src="https://rukminim1.flixcart.com/flap/128/128/image/5126ce89b897c8e9.png?q=100" text="Travel" />
     <Categories src="https://rukminim1.flixcart.com/flap/128/128/image/fe2a5da6f688d660.png?q=100" text="Applicances" />
     <Categories src="https://rukminim1.flixcart.com/flap/128/128/image/2a284788d550ac21.png?q=100" text="Furniture" />
     <Categories src="https://rukminim1.flixcart.com/flap/128/128/image/a2fccf3370909581.png?q=100" text="Beauty,Toys & more" />
     <Categories src="https://rukminim1.flixcart.com/flap/128/128/image/19b4a157cd8e8ff7.png?q=100" text="Grocery" />
     </div>
    <Carousel />
    <h1 className='title'>Best of Electronics</h1>
      <button className='bbtn'>View All</button>
    <div className='box2'>
    <Box1 src="https://rukminim1.flixcart.com/image/200/200/kwmfqfk0/headphone/1/h/1/-original-imag99d9prdducmh.jpeg?q=70" cap1="Onikuma X7 pro wired .." cap2="Just 2999" cap3="Now 2999"/>
    <Box1 src="https://rukminim1.flixcart.com/image/200/200/kmax8y80/selector-box/3/m/5/box-4k-mdz-22-ab-mi-original-imagf8ctdrsswheb.jpeg?q=70" cap1="TV Streaming Device" cap2="2799" cap3="Nokia,Mi,realme & more" />
    <Box1 src="https://rukminim1.flixcart.com/image/200/200/kk01pjk0/dslr-camera/f/v/o/eos-1500d-canon-original-imafzfugydh2mjgf.jpeg?q=70" cap1="Top 20 Cameras" cap2="from 3999" cap3="DSLR,Action,Digital & more" />
    <Box1 src="https://rukminim1.flixcart.com/image/200/200/ksxjs7k0/tablet/n/j/b/rmp2102-realme-original-imag6e3assqyqhfa.jpeg?q=70" cap1="Top Selling Tablets" cap2="Upto 45% Off" cap3="Limited period offer" />
    <Box1 src="https://rukminim1.flixcart.com/image/200/200/korijrk0/printer/c/s/f/deskjet-2331-hp-original-imag356w4gyxzjza.jpeg?q=70" cap1="Best Deals on Printers" cap2="From 2149" cap3="HP,Canon & more" />
    <Box1 src="https://rukminim1.flixcart.com/image/200/200/k4x2du80/headphone/s/w/t/boat-airdopes-381-original-imafnzqedwr6qutd.jpeg?q=70" cap1="True Wireless Buds" cap2="from 999" cap3="Largest Brandes Selection" />
    </div>
    <h1 className='title'>Fashion Brands on Discount</h1>
      <button className='bbtn'>View All</button>
    <div className='box2'>
    <Box1 src="https://rukminim1.flixcart.com/image/200/200/k3xcdjk0pkrrdj/sari/v/p/h/free-multicolor-sn3dde-rma-ashvmegh-sana3dshade-rama-original-imafmfcqnzmhkffg.jpeg?q=70" cap1="Top Rated Sarees and Kurtas" cap2="Under 399" cap3="Bigblockster deals" />
    <Box1 src="https://rukminim1.flixcart.com/image/200/200/k2urhjk0/sweatshirt/g/p/4/s-9656787-roadster-original-imafm3n4vhvvymrn.jpeg?q=70" cap1="Fort collins,Flying Maching" cap2="Min 60% Off" cap3="Jackets ,Sweatshirts & more" />
    <Box1 src="https://rukminim1.flixcart.com/image/200/200/ksgehzk0/short/h/3/v/m-ha5600-adidas-original-imag6yhfkggfnzzu.jpeg?q=70" cap1="Nike,Adidas,PUMA" cap2="50%-60% Off" cap3="Trackpants,shorts.." />
    <Box1 src="https://rukminim1.flixcart.com/image/200/200/jmccb680/kurta/a/f/y/m-ikrt0115-idalia-original-imaf99r4fvynyyj5.jpeg?q=70" cap1="Vishudh,Varanga" cap2="Min 60% Off" cap3="Kurta & Kurtis" />
    <Box1 src="https://rukminim1.flixcart.com/image/200/200/jgqv8280/watch/x/2/m/1771sl02-titan-original-imaf4wxfnejwbz8b.jpeg?q=70" cap1="Casio,Fosil & Titan" cap2="20%-70% Off" cap3="Craziest Deals ever!" />
    <Box1 src="https://rukminim1.flixcart.com/image/200/200/ktn9pjk0/shoe/q/g/n/7-hmi62-7-adidas-vicblu-ftwwht-solred-original-imag6yyehhne6zeh.jpeg?q=70" cap1="Adida,Reebok & more" cap2="min 60% Off" cap3="Sport shoes & Sandals" />
    </div>
    <h1 className='title'>Top Offers</h1>
      <button className='bbtn'>View All</button>
      <div className='box2'>
      <Box1 src="https://rukminim1.flixcart.com/image/200/200/k5y7tzk0/book-shelf/k/m/n/galvanised-steel-sj030405-flipkart-perfect-homes-studio-plain-original-imafzgsguethpnmz.jpeg?q=70" cap1="Bookshelves" cap2="From 699" cap3="With & Without wallmount" />
      <Box1 src="https://rukminim1.flixcart.com/image/200/200/koudfgw0/electric-kettle/s/s/x/omni-1-5l-kettle-bke15lssb22-borosil-original-imag37f2acq2cxxf.jpeg?q=70" cap1="Electric Kettles" cap2="Up To 60% Off" cap3="Instant Food Maker" />
      <Box1 src="https://rukminim1.flixcart.com/image/200/200/jn3hocw0/microphone/d/c/e/boya-by-m1-3-5mm-electret-condenser-microphone-with-1-4-adapter-original-imaf9v2jhhakavks.jpeg?q=70" cap1="Microphone" cap2="Upto 70% Off" cap3="Explore Now" />
      <Box1 src="https://rukminim1.flixcart.com/image/200/200/k7531jk0/musical-toy/e/m/4/future-09-musical-stunt-car-rotate-360-with-flashing-light-music-original-imafpg2r5tm3rp6w.jpeg?q=70" cap1="Musical Toys" cap2="Under 699" cap3="Explore more" />
      <Box1 src="https://rukminim1.flixcart.com/image/200/200/krme93k0/diary-notebook/v/e/m/infinity-grey-concept-original-imag5cmxy4yqznvf.jpeg?q=70" cap1="Office Supplies" cap2="Under 999" cap3="Paper,Card Holders" />
      <Box1 src="https://rukminim1.flixcart.com/image/200/200/kebpqq80/diary-notebook/s/r/h/classmate-02105012-original-imafvf9aeb94tb78.jpeg?q=70" cap1="Under 699" cap2="" cap3="Explore More" />
      </div>
      <div className='box1'>
        <Box2 src="https://rukminim1.flixcart.com/flap/100/41/image/3fd5016ba614fb00.jpg?q=50"/>
        <Box2 src="https://rukminim1.flixcart.com/flap/100/41/image/5393269daa5988e5.jpg?q=50"/>
        <Box2 src="https://rukminim1.flixcart.com/flap/100/41/image/068c4c19dd44da93.jpg?q=50"/>
        <Box2 src="https://rukminim1.flixcart.com/flap/100/41/image/d0b3ebe175d9a877.jpg?q=50"/>
      </div>
      <h1 className='title'>Trending Deals</h1>
      <button className='bbtn'>View All</button>
      <div className='box2'>
      <Box1 src="https://rukminim1.flixcart.com/image/200/200/kgsb1jk0/scooter/n/e/c/tikes-scooter-for-kids-height-pu-wheels-with-brake-manual-little-original-imafwy329n8umqfg.jpeg?q=70" cap1="Outdoor Toys" cap2="Upto 70% Off" cap3="Disney & more" />
      <Box1 src="https://rukminim1.flixcart.com/image/200/200/kkfrjww0/stuffed-toy/0/d/p/soft-and-big-5ft-pink-teddy-bear-gift-for-your-love-one-150-original-imafzs2egckfheqf.jpeg?q=70" cap1="Soft Toys" cap2="Upto 60% Off" cap3="Dumpy STuff & more" />
      <Box1 src="https://rukminim1.flixcart.com/image/200/200/ktrk13k0/stencil/r/k/3/1-kd264-wall-arts-kayra-decor-original-imag7fezgke9zgra.jpeg?q=70" cap1="Tailoring & Embroidery Kits" cap2="From 69" cap3="Sewing tools" />
      <Box1 src="https://rukminim1.flixcart.com/image/200/200/card-holder/c/z/h/stealodeal-card-holder-metal-silver-stainless-steel-business-original-imaej2ydbhfdgyyc.jpeg?q=70" cap1="Card Holder" cap2="From 99" cap3="Explore Now" />
      <Box1 src="https://rukminim1.flixcart.com/image/200/200/jjbqufk0/acoustic-guitar/y/a/4/jrz38c-rds-acoustic-guitar-red-sunburst-38-inch-cutaway-with-original-imaf6wrssggqfzyr.jpeg?q=70" cap1="Jaurez Guitar" cap2="75% off" cap3="Explore Now" />
      <Box1 src="https://rukminim1.flixcart.com/image/200/200/jh2aqvk0/vehicle-pull-along/9/g/8/1-18-buggati-chiron-bburago-original-imaf54z2zjrj3u3n.jpeg?q=70" cap1="Toy Cars" cap2="From 99" cap3="Hot Wheels" />
      </div>
     <div className='box3'>
       <h6 className='mtitle'>Discounts for You</h6>
       <div className='box3-1'>
       <Mobile1 src="https://rukminim1.flixcart.com/image/612/612/kmds4nk0/soap/q/l/d/3-375-3-soaps-each-125g-pears-original-imagfatpmfwrszm6.jpeg?q=70" capt1="Bath Soap" capt2="Min 20% Off"/>
       <Mobile1 src="https://rukminim1.flixcart.com/image/312/312/kwi5evk0/smartwatch/2/j/6/35-android-id-116-smart-black-watch-bluetooth-techel-yes-original-imag963j4wshwhtg.jpeg?q=70" capt1="Amdroid & IOS .." capt2="Min 40% Off"/>
       <Mobile1 src="https://rukminim1.flixcart.com/image/570/684/kod858w0/hand-messenger-bag/v/k/y/cotton-style-hb-c-hb-0236-hand-held-bag-uptouch-original-imag2u2husxx5b98.jpeg?q=50" capt1="Casual Totes" capt2="Min 70% Off"/>
       <Mobile1 src="https://rukminim1.flixcart.com/image/612/612/kingqkw0-0/hair-straightener/s/v/x/hp8302-06-philips-original-imaf9jzzzurgqykt.jpeg?q=70" capt1="Haur Straighteners" capt2="Min 50% Off"/>
       </div>
     </div>
     <div className='box3'>
     <h6 className='mtitle'>Winter Essentials</h6>
       <div className='box3-1'>
       <Mobile1 src="https://rukminim1.flixcart.com/image/612/612/kuipea80/electric-kettle/k/u/y/favourite-pigeon-original-imag7mzd7efhkvnr.jpeg?q=70" capt1="Electric Kettles" capt2="Min 30% Off"/>
       <Mobile1 src="https://rukminim1.flixcart.com/image/570/684/knqd3m80/sock/s/s/w/free-3-vmr-net-vamear-exclusive-original-imag2czfxkersvpz.jpeg?q=50" capt1="Men's and Women's socks" capt2="Top Picks"/>
       <Mobile1 src="https://rukminim1.flixcart.com/image/570/684/kij6f0w0-0/sweatshirt/p/g/3/xl-sys-4335-funday-fashion-original-imafyazbm3yj655x.jpeg?q=50" capt1="Women'ss Sweatshirts" capt2="Top Picks"/>
       <Mobile1 src="https://rukminim1.flixcart.com/image/312/312/joynde80/water-geyser/q/7/w/hi03pdb30-hindware-3-0-original-imafbaxj5xsf6c9n.jpeg?q=70" capt1="Water Geysers" capt2="Min 30% Off"/>
       </div>
     </div>
     <div className='box3'>
     <h6 className='mtitle'>Hurry Up...</h6>
       <div className='box3-1'>
       <Mobile1 src="https://rukminim1.flixcart.com/image/612/612/kwb07m80/power-bank/p/y/p/-original-imag9yjrvtzqmdxm.jpeg?q=70" capt1="Top-Selling PowerBanks" capt2="From 449"/>
       <Mobile1 src="https://rukminim1.flixcart.com/image/612/612/ksaoqkw0/key-holder/6/4/0/gkc003-gajkarna-creations-original-imag5w4jjbhyfrhq.jpeg?q=70" capt1="Home Decor" capt2="Just 59"/>
       <Mobile1 src="https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/n/p/d/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfwyzztfnh.jpeg?q=70" capt1="iPhone 12 Mini" capt2="From 44199"/>
       <Mobile1 src="https://rukminim1.flixcart.com/image/612/612/power-hand-tool-kit/v/v/g/gsb-500-re-kit-bosch-original-imaeg63dbybtqzfy.jpeg?q=70" capt1="Power Hand Tools" capt2="From 99"/>
       </div>
     </div>
     <div className='box3'>
     <h6 className='mtitle'>For Living Room</h6>
       <div className='box3-1'>
       <Mobile1 src="https://rukminim1.flixcart.com/image/612/612/km0x5zk0/curtain-accessory/w/w/j/cp-silver-lining-brakcet-knob-siyara-original-imagff2ftfnjfpmj.jpeg?q=70" capt1="Curtain Accessories" capt2="Grab or Gone"/>
       <Mobile1 src="https://rukminim1.flixcart.com/image/612/612/jz8qf0w0/painting/6/n/u/sasd35n-saf-original-imafj22gzmsgctbb.jpeg?q=70" capt1="Paintings" capt2="Top Deals"/>
       <Mobile1 src="https://rukminim1.flixcart.com/image/612/612/kirr24w0-0/table-cover/4/6/h/brown-dining-1-brown-cloth-net-delhi-pvc-corp-original-imafygvgshzrgpgg.jpeg?q=70" capt1="Table Covers" capt2="New Range"/>
       <Mobile1 src="https://rukminim1.flixcart.com/image/612/612/jdajwy80/carpet-rug/n/6/h/srm105-mayur7star-original-imaeqvhbkqjygn7t.jpeg?q=70" capt1="Floor Coverings" capt2="New Collecion"/>
       </div>
     </div>
    </div>
  
  );
}

export default App;
