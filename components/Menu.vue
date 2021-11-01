<template>
  <nav class="menu">
    <ul class="menu-list">
      <li><a href="/">Main page</a></li>
      <li class="parent">
        <a href="/#catalog">Catalog</a>
        <!-- <ul class="submenu">
          <li><a href="#">Item 1</a></li>
        </ul> -->
      </li>
      <li><a href="/#contacts">Contacts</a></li>
    </ul>
  </nav>
</template>

<style lang="scss">
.menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #45CB5E;
  z-index: 101;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

@media (min-width: 992px) {
  .menu {
    position: static;
    justify-content: flex-start;
    flex-direction: row;
  }
}

.menu-list {
  list-style: none;
  padding: 0;
  margin-left: 0;
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;

  li {
    position: relative;
    margin: 20px 0;
  }

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.1rem;
  }

  .submenu {
    margin: 10px 0 30px 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;

    li {
      position: relative;
      margin: 0;
      padding: 4px 20px;

      &::before {
        // content: '';
        position: absolute;
        left: -5px;
        top: 50%;
        width: 8px;
        height: 8px;
        border-top: 1px solid #fff;
        border-right: 1px solid #fff;
        transform: translateY(-50%) rotate(45deg);
      }
    }

    a {
      text-transform: none;
      font-size: 0.9rem;
    }
  }
}

@media (min-width: 992px) {
  .menu-list {
    display: flex;
    text-align: left;

    li {
      margin: 0 40px 0 0;
      padding-bottom: 6px;

      &:last-child {
        margin-right: 0;
      }

      &:hover::after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #fff;
      }

      &:hover .submenu {
        display: block;
      }
    }

    .submenu {
      display: none;
      width: 360px;
      position: absolute;
      top: calc(100% + 3px);
      left: 50%;
      background-color: #fff;
      transform: translateX(-50%);
      margin: 0;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
      align-items: start;
      z-index: 5;

      li {
        width: 100%;
        padding: 0;
        border-bottom: 1px solid #E8E8E8;

        &:hover::after {
          display: none;
        }

        &:hover {
          background-color: #f5f5f5;
        }

        &:last-child {
          border-bottom: none;
        }
      }

      a {
        display: block;
        width: 100%;
        padding: 22px 30px;
        color: #202020;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}

</style>
