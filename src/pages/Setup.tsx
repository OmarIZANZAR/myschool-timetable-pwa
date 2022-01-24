import CSS from 'csstype';

const Setup = () => {
    return (
        <div style={setupContainer}>
            Welcome to the setup page
        </div>
    )
}

const setupContainer : CSS.Properties = {
    backgroundColor: 'inherit',
    height: '100%',
    width: '100%',
    padding: '1rem',
}

export default Setup;
