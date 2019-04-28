export default class TeslaService {
  async getResource(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  }

  getAuto() {
    return this.getResource(`https://tesla.isdev.ru/cars`);
  }
}
