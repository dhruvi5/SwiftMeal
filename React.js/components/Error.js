import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();

    return (
        <div>
            <h2>
                OOPS
            </h2>
            <h2>
                {err.status}
            </h2>
        </div>
    );
};

export default Error;
