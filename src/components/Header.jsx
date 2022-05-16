import Logo from '../imgs/lovo-horizontal.jpg'


export function Header(){
    return(
        <header className="bg-brandBlue-500 w-full h-12 flex justify-center">
            <img src={Logo} className="w-30 h-30 " ></img>
        </header>
    )
}
