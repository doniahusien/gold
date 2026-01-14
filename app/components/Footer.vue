<script setup lang="ts">
const { t } = useI18n()

const quickLinks = [
  { to: '/', label: 'footer.home' },
  { to: '/about', label: 'footer.about' },
  { to: '/products', label: 'footer.products' },
]

const supportLinks = [
  { to: '/faq', label: 'footer.faq' },
  { to: '/privacy', label: 'footer.privacy' },
  { to: '/terms', label: 'footer.terms' },
]


const contactItems = [
  {
    icon: 'mdi:email-outline',
    text: 'support@binabdullah.com',
  },
  {
    icon: 'mdi:phone-outline',
    text: '+966 12 656 441',
  },
  {
    icon: 'mdi:map-marker-outline',
    text: 'Riyadh, Saudi Arabia',
  },
]


const socialLinks = [
  { icon: 'iconoir:facebook', url: 'https://facebook.com' },
  { icon: 'ic:round-tiktok', url: 'https://tiktok.com' },
  { icon: 'iconoir:snapchat', url: 'https://snapchat.com' },
  { icon: 'prime:twitter', url: 'https://twitter.com' },
  { icon: 'basil:linkedin-outline', url: 'https://linkedin.com' },
  { icon: 'iconoir:youtube', url: 'https://youtube.com' },
]

const paymentIcons = [
  { name: 'cash' },

  { name: 'wallet' },
  { name: 'visa' },

]
</script>

<template>
  <footer
    class="relative z-40 text-white bg-zinc-900 overflow-hidden
           bg-[url('/images/bg_footer.png')] bg-no-repeat bg-center"
  >
    <div class="absolute inset-0 bg-primary/20"></div>

    <div class="relative container z-50 mx-auto px-6 py-14">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        <div class="space-y-4 text-center flex flex-col items-center">
          <NuxtImg src="/logo.png" alt="logo" class="w-16 h-auto" />
          <p class="leading-relaxed text-gray-dark">
            {{ t('footer.description') }}
          </p>
        </div>

        <div>
          <h4 class="text-xl font-semibold">
            {{ t('footer.quickLinks') }}
          </h4>
          <ul class="space-y-4 mt-8">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink :to="link.to" class="hover:text-main transition">
                {{ t(link.label) }}
              </NuxtLink>
            </li>
          </ul>
        </div>


        <div>
          <h4 class="text-xl font-semibold">
            {{ t('footer.help') }}
          </h4>
          <ul class="space-y-4 mt-8">
            <li v-for="link in supportLinks" :key="link.to">
              <NuxtLink :to="link.to" class="hover:text-main transition">
                {{ t(link.label) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-xl font-semibold">
            {{ t('footer.contact') }}
          </h4>
          <ul class="space-y-4 mt-8">
            <li
              v-for="(item, index) in contactItems"
              :key="index"
              class="flex items-center gap-2"
            >
              <Icon :name="item.icon" />
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </div>


        <div>
          <h4 class="text-xl font-semibold">
            {{ t('footer.follow') }}
          </h4>

          <div class="flex gap-3 mt-8">
           
              <SocialIcon  v-for="(social, index) in socialLinks"  :social="social" :key="index"/>

          </div>
        </div>
      </div>

      <div
        class="border-t border-zinc-800 mt-12 pt-6
               flex flex-col md:flex-row items-center
               justify-between gap-4 text-xs text-zinc-500"
      >
        <p>
          © {{ new Date().getFullYear() }} {{ t('footer.rights') }}
        </p>

        <div class="flex gap-3">
          <div
            v-for="(icon, index) in paymentIcons"
            :key="index"
            class="bg-white rounded-sm p-1 flex justify-center items-center"
          >
            <SvgIcon :name="icon.name" class=" w-auto" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
