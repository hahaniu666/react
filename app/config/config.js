const dev = process.env.NODE_ENV === 'development';
const host = dev ? '' : 'http://192.168.193.51:9081';

const Config = {
  dev,
  host,
  root: 'egate',
  baseUrl: `${host}/egate/`, // 本机地址
  quotationUrl: 'http://localhost:2115/quotation2/',
  webnetUrl: 'ws://192.168.193.51/ws/',
  bookingId: 'ENT00002',
  inputChannel: 6,
  heartCycle: 30 * 1000, // 心跳检测周期
};
export default Config;
