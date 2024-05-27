import { useId } from 'react'

function Form() {
    const nameId = useId();
    // const passwordId = useId();
    // const emailId = useId();

    const styles = {
            padding: "20px",
            display: 'flex',
            justifyContent: "center",
            background: "skyblue",
            color: "purple"
    }

    return (
        <>
            <div style={styles}>
                <label htmlFor={nameId}>Username: </label>
                <input type="text" id={nameId} />
                <label htmlFor={"password" + nameId}>Password: </label>
                <input type="password" id={"password" + nameId} />
                <label htmlFor={"email" + nameId}>Email: </label>
                <input type="text" id={"email" + nameId} />
            </div>
        </>
    )
}

export default Form