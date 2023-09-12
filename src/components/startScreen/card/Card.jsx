import styles from './Card.module.css';

const Card = (props) => {
    const Component = props.Component;
    return (
        <div>
            <Component styles={props.styles} />
        </div>
    );
};

export default Card;