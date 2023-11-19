import './Card.css'
const DashBoardCard = (props) => {

    const { image } = props
    const {  title, description,price } = props.data


    return (
        <>

            <div className='cardlist'  >
                <div className='cardlist1' onClick={props.onClick} >
                    <div >
                        <img src={image}></img>
                        <h3>{title}</h3>
                        <h5>{description}</h5>
                        <h5>{"Rs "+price}</h5>
                    </div>
                </div>
            </div>


        </>
    )

}

export default DashBoardCard;