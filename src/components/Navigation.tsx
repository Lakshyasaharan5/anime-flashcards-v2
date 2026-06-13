import ForwardIcon from '@mui/icons-material/Forward';

export default function Navigation() {
    return (
        <div className="mt-10 flex gap-2">
            <button className='hover:cursor-pointer'><ForwardIcon className="rotate-180" sx={{ fontSize: 60 }} /></button>
            <button className='hover:cursor-pointer'><ForwardIcon sx={{ fontSize: 60 }} /></button>
        </div>
    );
}