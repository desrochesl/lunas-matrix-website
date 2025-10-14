<template>
  <div class="navbar bg-base-100 shadow-sm p-5">
    <div class="flex-1">

      <a class="btn h-12 min-h-12 font-bold bg-base-100 btn-ghost text-3xl  hover:text-pink-700 rounded-md hover:bg-accent"
         href="/">Luna's Matrix Calculator</a>

    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 items-center">
        <li>
          <details class="h-12 min-h-12 items-center ">
            <summary
                class="h-12 min-h-12 px-4 flex font-bold rounded-md hover:bg-accent items-center justify-center hover:text-pink-700 "
            >
              Functions
            </summary>
            <ul class="bg-base-100  p-2 absolute right-0 mt-2 shadow-lg z-50 ">
              <li class="hover:text-pink-700 hover:bg-accent rounded-md"><a href="/add">Add</a></li>
              <!--              <li><a href="/multiply">Multiply</a></li>-->
              <!--              <li><a href="/rowreduce">Row Reduce</a></li>-->
              <!--              <li><a href="/determinant">Determinant</a></li>-->
            </ul>
          </details>
        </li>
        <li class="hover:text-pink-800 hover:bg-accent rounded-md transition-colors">
          <a
              class="flex items-center justify-center h-12 w-12"
              href="https://luna.desroches.org/github"
              target="_blank"
          >
            <i class="fa-brands fa-github text-2xl"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
