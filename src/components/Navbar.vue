<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <a class="btn btn-ghost text-5xl">Matrices</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 items-center">
        <li>
          <details class="h-12 min-h-12 items-center">
            <summary
              class="h-12 min-h-12 px-4 flex font-bold items-center justify-center hover:text-pink-800"
            >
              Functions
            </summary>
            <ul class="bg-base-100 rounded-t-none p-2">
              <li><a>Add</a></li>
              <li><a>Multiply</a></li>
              <li><a>Row Reduce</a></li>
              <li><a>Determinant</a></li>
            </ul>
          </details>
        </li>
        <li class="hover:text-pink-800 transition-colors">
          <a
            href="https://luna.desroches.org/github"
            target="_blank"
            class="flex items-center justify-center h-12 w-12"
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
