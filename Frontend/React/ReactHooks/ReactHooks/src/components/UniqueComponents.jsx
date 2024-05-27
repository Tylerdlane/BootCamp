import { useId } from 'react';

function UniqueComponents() {
    const uniqueId = useId();
    return (
        <>
            <div>
                <label htmlFor={uniqueId}>Username: </label>
                <input type="text" id={uniqueId} />
            </div>
        </>
    );
}
export default UniqueComponents