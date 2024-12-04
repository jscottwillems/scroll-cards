<script setup lang="ts">
import Card from "./Card.vue";
import { ref, onMounted, onUnmounted } from "vue";

// Configuration for IntersectionObserver - triggers when card is fully visible
const OBSERVER_CONFIG = {
  threshold: 1.0,
  rootMargin: "0px",
} as const;

const cards = Array.from(Array(100), (_, x) => `Card ${x + 1}`);
const focusedCardId = ref<number | null>(null);
let lastScrollPosition = 0;
let scrollTimeout: number | null = null;
let observer: IntersectionObserver | null = null;

const getCardIndex = (element: Element): number =>
  parseInt(element.getAttribute("data-index") || "0");

// Updates focused card based on scroll direction and visibility
const handleCardVisibilityChange = (entries: IntersectionObserverEntry[]) => {
  const currentScroll = window.scrollY;
  const scrollingDown = currentScroll > lastScrollPosition;

  const visibleIndices = entries
    .filter((entry) => entry.isIntersecting)
    .map((entry) => getCardIndex(entry.target));

  if (visibleIndices.length > 0) {
    focusedCardId.value = scrollingDown
      ? Math.max(...visibleIndices)
      : Math.min(...visibleIndices);
  }

  lastScrollPosition = currentScroll;
};

// Debounced scroll handler
const refreshCardObservations = () => {
  if (scrollTimeout) {
    window.cancelAnimationFrame(scrollTimeout);
  }

  scrollTimeout = window.requestAnimationFrame(() => {
    document.querySelectorAll(".card-container").forEach((card) => {
      observer?.observe(card);
    });
  });
};

onMounted(() => {
  // Create the IntersectionObserver
  observer = new IntersectionObserver(handleCardVisibilityChange, OBSERVER_CONFIG);

  // Start observing all cards
  document.querySelectorAll(".card-container").forEach((card) => {
    observer?.observe(card);
  });

  // Add scroll listener with passive flag for better performance
  window.addEventListener("scroll", refreshCardObservations, { passive: true });
});

onUnmounted(() => {
  // Stop observing all elements
  observer?.disconnect();
  // Remove scroll listener
  window.removeEventListener("scroll", refreshCardObservations);
  // Cancel any pending animation frame
  if (scrollTimeout) {
    window.cancelAnimationFrame(scrollTimeout);
  }
});
</script>

<template>
  <div>
    <Card
      v-for="(card, id) in cards"
      :cardText="card"
      :key="id"
      :isInFocus="focusedCardId === id"
      class="card-container"
      :data-index="id"
    >
      <p>{{ card }}</p>
    </Card>
  </div>
</template>

<style scoped></style>
