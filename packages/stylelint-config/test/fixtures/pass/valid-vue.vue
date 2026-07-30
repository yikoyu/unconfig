<template>
  <div class="test">Hello</div>
</template>

<style>
:root {
  --primary: #333;
}

.test {
  font-size: 16px;
  color: var(--primary);
}

.test-modifier {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
