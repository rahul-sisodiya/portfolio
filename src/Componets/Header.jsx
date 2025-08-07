
function Header(){
  return (
    <header className="flex justify-between items-centre p-6 max-w-1152px mx-auto">
      <div className="flex item-centre gap-2">

        <div className="w-6 h-6 bg-green-200 rounded-full"></div>
        <span className="font-bold ">Rahul Singh</span>
      </div>

      <nav className="flex items-center gap-6 text-sm font-semibold">
    <a href="https://github.com/rahul-sisodiya"  target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/rahul-singh-aa0b292b5/" target="_blank">LinkedIn</a>
    <a href="https://leetcode.com/u/rahul_sisodiya/" target="_blank">Leetcode</a>
    <a href="https://discord.com/users/830034465123860550" target="_blank">Discord</a>
    <a href="https://twitter.com/RahulSingh91985" target="_blank">Twitter</a>
    
      </nav>

    </header>
  );
  
}

export default Header;