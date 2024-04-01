import './Card.css';
//Berfungsi untuk membuat container dengan background color tertentu
//props.children agar bisa melakukan compile tanpa menggunakan builtin seperti div
//const classes dibuat agar si Card bisa diberi classname jadi bisa di custom styling, menggunakan children dari props
function Card (props) {
    const classes = 'card ' + props.className;
    return <div className = {classes}>{props.children}</div>
}

export default Card