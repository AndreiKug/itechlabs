import { Link } from "react-router-dom";

const Page404 = () => {
    return ( 
        <div>          
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Страница не найдена</p>
            <Link to="/" style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '14px', 'marginTop': '30px', 'color': 'white', 'textDecoration': 'none'}}>Вернуться на главную</Link>
        </div>
     );
}
 
export default Page404;