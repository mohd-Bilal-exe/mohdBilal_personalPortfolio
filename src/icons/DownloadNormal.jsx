export default function DownloadNormal({ size, styles }) {


    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray={32} strokeDashoffset={32} d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></animate><set fill="freeze" attributeName="stroke-dasharray" begin="0.8s" to="2 4"></set></path><path strokeDasharray={32} strokeDashoffset={32} d="M12 21c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="32;0"></animate></path><path strokeDasharray={10} strokeDashoffset={10} d="M12 8v7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"></animate></path><path strokeDasharray={6} strokeDashoffset={6} d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="6;0"></animate></path></g></svg>
    );
}