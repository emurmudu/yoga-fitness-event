
import { BiSolidRightArrow } from 'react-icons/bi';
const LeftSideHome = () => {
    return (
        <div className=" pl-9 p-4 md:text-left text-center">
            <div className='mt-4'>
                <h1 className=' text-lg md:text-2xl mb-4 text-pink-400 font-bold'>Why Need Yoga </h1>
                <ol className=' space-y-2'>
                    <li className='flex items-center gap-1'> <BiSolidRightArrow className=' text-pink-400'></BiSolidRightArrow> <span>It Increases Flexibility</span> </li>
                    <li className='flex items-center gap-1'><BiSolidRightArrow className=' text-pink-400'></BiSolidRightArrow><span>Enhances Balance</span></li>
                    <li className='flex items-center gap-1'><BiSolidRightArrow className=' text-pink-400'></BiSolidRightArrow><span>It Reduces Your Stress</span></li>
                    <li className='flex items-center gap-1'><BiSolidRightArrow className=' text-pink-400'></BiSolidRightArrow><span>It Connects Your Body And Mind</span></li>
                    <li className='flex items-center gap-1'><BiSolidRightArrow className=' text-pink-400'></BiSolidRightArrow><span>It Boosts Your Energy Level</span></li>
                    <li className='flex items-center gap-1'><BiSolidRightArrow className=' text-pink-400'></BiSolidRightArrow><span>It Improves Blood Circulation</span></li>
                    <li className='flex items-center gap-1'><BiSolidRightArrow className=' text-pink-400'></BiSolidRightArrow><span>It Enhances Good Mood</span> </li>
                    <li className='flex items-center gap-1'><BiSolidRightArrow className=' text-pink-400'></BiSolidRightArrow><span>Promotes Better Sleep</span></li>
                    <li className='flex items-center gap-1'><BiSolidRightArrow className=' text-pink-400'></BiSolidRightArrow><span>It Controls Your Weight</span></li>
                    <li className='flex items-center gap-1'><BiSolidRightArrow className=' text-pink-400'></BiSolidRightArrow><span>Increases Social Connection</span></li>
                    <li className='flex items-center gap-1'><BiSolidRightArrow className=' text-pink-400'></BiSolidRightArrow><span>Improves Immune System</span></li>
                    <li className='flex items-center gap-1'><BiSolidRightArrow className=' text-pink-400'></BiSolidRightArrow><span> It Triggers Spiritual Growth</span></li>
                </ol>
            </div>
            <div>
                <h1 className=' text-lg md:text-2xl mt-4 mb-4 text-pink-400 font-bold'>Membership </h1>
                <ol className=' space-y-2'>
                    <li className='flex items-center gap-1'> <BiSolidRightArrow className=' text-pink-400'></BiSolidRightArrow> <span>Founding members</span> </li>
                    <li className='flex items-center gap-1'> <BiSolidRightArrow className=' text-pink-400'></BiSolidRightArrow> <span>Life Membership (10 years)</span> </li>
                    <li className='flex items-center gap-1'> <BiSolidRightArrow className=' text-pink-400'></BiSolidRightArrow> <span>Personal membership</span> </li>
                    <li className='flex items-center gap-1'> <BiSolidRightArrow className=' text-pink-400'></BiSolidRightArrow> <span>Institutional membership</span> </li>
                </ol>
            </div>
        </div>
    );
};

export default LeftSideHome;