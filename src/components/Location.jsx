import PropTypes from 'prop-types';
export default function Location({ darkMode }) {
    return (
        <div className="w-full h-full flex justify-center items-center group overflow-hidden">
            <div
                className="w-full h-full bg-center bg-cover group-hover:scale-110 transition-all duration-500"
                style={{
                    backgroundImage: `url(${darkMode ? "/LocationDark.png" : "/LocationLight.png"})`
                }}
            />
        </div>
    );
}
Location.propTypes = {
    darkMode: PropTypes.boolean,
};