const Profile = () => {
  return (
    <section className="flex flex-col items-center border-4 border-primary rounded-pill my-3 p-3 full">
      <div>
        <img src="/cat.jpg" className="rounded-full size-16" />
        <h6 className="text-lg font-medium">Meow Kitty</h6>
        <p className="font-normal text-md text-gray-700">@meowkitty</p>
      </div>
      <div className="flex my-3 gap-3">
        <div className="flex items-center flex-col">
          <h6 className="font-semibold text-lg">50</h6>
          <p className="font-medium text-gray-700 text-md">Followers</p>
        </div>

        <div className="flex items-center flex-col">
          <h6 className="font-semibold text-lg">98</h6>
          <p className="font-medium text-gray-700 text-md">Following</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
