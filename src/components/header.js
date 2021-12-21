import "./headerstyles.css"
import Search from "@material-ui/icons/SearchOutlined"
import Menu from "@material-ui/icons/Menu"
import Bell from "@material-ui/icons/Notifications"
import Cart from "@material-ui/icons/ShoppingCart"
import Mic from "@material-ui/icons/Mic"

function Header(){
    return(
     <div className="header">
         <Menu className="menu" />
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6RpnS0eMWz1h90shDerglTfpo7V70GPM_F6c9i2tbxgrjk0YCY7fKaWgUeq38jmoug&usqp=CAU" className="logo" alt=""/>
        <Bell className="bell"/>
        <Cart className="cart"/>
        <input className="input1" type="text" placeholder="Search for products,brands and more"/>
        <Search className="search" />
        <Mic className="mic"/>
        <div class="backgnd"></div>
        <button class="b1" type="button">Login</button>
        <span class="s1">More</span>
        <span class="s2">Cart</span>
     </div>
    );
}

export default Header;