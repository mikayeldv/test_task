const importAll = (r: any) => {
  const svgs: Record<string, any> = {};
  r.keys().forEach((key: any) => {
    const name = key.replace('./', '').replace('.svg', '');
    svgs[name] = r(key).default;
  });
  return svgs;
};

const Flags = importAll(require.context('./', false, /\.svg$/));

export default Flags;
