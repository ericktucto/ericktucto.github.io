const ctx = (require as any).context('./', false, /\.svg$/);

const icons: Record<string, string> = {};
ctx.keys().forEach((key: string) => {
  const name = key.replace(/^\.\//, '').replace(/\.svg$/, '');
  icons[name] = ctx(key);
});

export default function (icon: string, size: string = '24px') {
  const wrapper = document.createElement('span');
  wrapper.innerHTML = icons[icon];
  const i = wrapper.querySelector('svg');
  if (!i) {
    console.log("Hola erick", i, icon)
  }
  i.classList.add('inline-block');
  i.style.width = size;
  i.style.height = size;
  return i;
}
