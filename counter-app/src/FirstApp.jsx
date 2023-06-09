import PropTypes from 'prop-types';


const newMessage = {
    message:'Hola Mundo',
    title: 'Fernando'
};


export const FirstApp = ({
    title, 
    subtitle, 
    numero
}) => {

    // if(!title){
    //     throw new Error('El title no existe')
    // }


  return (
    <>
    <h1>hola! {title}</h1>
       {/* <code>{ JSON.stringify(newMessage)  }</code>*/}
       

        <p>{ subtitle }</p>

        <p>{ numero +1 }</p>
    </>
  )
}



FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

// los defaultProps entran antes que los propTypes 

FirstApp.defaultProps = {
    title: 'No hay titulos',
    subtitle:'No subtitle'
}