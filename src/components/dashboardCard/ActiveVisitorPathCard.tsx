const ActiveVisitorPathCard = () => {
  return (
    <div className="w-1/2 bg-white rounded ">
      <div className="bg-green-700 p-2 rounded-t text-white">
        Currently active visitor of blogs
      </div>
      <div className="h-[300px] overflow-y-scroll ">
        <div className="flex gap-4 border-b p-2">
          <div>(02) user</div>
          <div>blog/sports/post-1</div>
        </div>
        <div className="flex gap-4 border-b p-2">
          <div>(10) user</div>
          <div>blog/sports/post-2</div>
        </div>
        <div className="flex gap-4 border-b p-2">
          <div>(22) user</div>
          <div>blog/sports/post-1</div>
        </div>
        <div className="flex gap-4 border-b p-2">
          <div>(02) user</div>
          <div>blog/sports/post-1</div>
        </div>
        <div className="flex gap-4 border-b p-2">
          <div>(12) user</div>
          <div>blog/sports/post-1</div>
        </div>
        <div className="flex gap-4 border-b p-2">
          <div>(10) user</div>
          <div>blog/sports/post-2</div>
        </div>
        <div className="flex gap-4 border-b p-2">
          <div>(22) user</div>
          <div>blog/sports/post-1</div>
        </div>
        <div className="flex gap-4 border-b p-2">
          <div>(02) user</div>
          <div>blog/sports/post-1</div>
        </div>
        <div className="flex gap-4 border-b p-2">
          <div>(12) user</div>
          <div>blog/sports/post-1</div>
        </div>
      </div>
    </div>
  );
};

export default ActiveVisitorPathCard;
