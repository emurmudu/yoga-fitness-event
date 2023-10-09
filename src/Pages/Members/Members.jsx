
import membersInfo from './../../../public/members.json';
const Members = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-6 lg:px-10 lg:mt-4 lg:mb-4 gap-4">
            {membersInfo.map(member => (
                <div key={member.id} className="overflow-hidden">
                    <img
                        src={member.image_url}
                        alt={member.title}
                        className="w-full h-auto"
                    />
                    <p className="text-center mt-2">Name : {member.name}</p>
                    <p className="text-center mt-2">ID No : {member.id}</p>
                    <p className="text-center mt-2">Profession : {member.profession}</p>
                </div>
            ))}
        </div>
    );
};

export default Members;