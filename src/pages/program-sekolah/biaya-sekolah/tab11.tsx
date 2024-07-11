const Tab11 = () => {
  return (
    <div className="mt-4 card p-10 bg-base-100">
      <div className="flex flex-col items-center justify-between gap-4">
        <span className="font-bold text-3xl lg:text-4xl text-center text-secondary-content">
          PLAYGROUP REGULAR
        </span>
      </div>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row items-start justify-center">
        <div className="w-full xl:w-2/3 border border-primary-content rounded-md">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th
                    colSpan={2}
                    className="text-center text-lg bg-primary-content bg-opacity-80 text-neutral"
                  >
                    BIAYA PLAYGROUP REGULAR (2-4 Years)
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm text-neutral font-medium">
                {/* row 1 */}
                <tr>
                  <td>Biaya Registrasi</td>
                  <td className="text-end">Rp. 100.000</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Biaya Masuk ( 1x Bayar )</td>
                  <td className="text-end">Rp. 4.500.000</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Biaya Alat Tulis Sekolah</td>
                  <td className="text-end">Rp. 225.000</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>Biaya Aktifitas 1 Tahun</td>
                  <td className="text-end">Rp. 1.760.000</td>
                </tr>
                {/* row 5 */}
                <tr>
                  <td>Biaya Seragam</td>
                  <td className="text-end">Rp. 450.000</td>
                </tr>
                {/* row 6 */}
                <tr>
                  <td>Biaya Perbulan</td>
                  <td className="text-end">Rp. 700.000</td>
                </tr>
                {/* row 7 */}
                <tr>
                  <td>Biaya Test</td>
                  <td className="text-end">Rp. 500.000</td>
                </tr>
                {/* row 8 */}
                <tr className="font-bold text-secondary-content">
                  <td>Total Pembayaran</td>
                  <td className="text-end">Rp. 8.235.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full xl:w-1/3 border border-primary-content rounded-md">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th
                    colSpan={2}
                    className="text-center text-lg bg-primary-content bg-opacity-80 text-neutral"
                  >
                    JADWAL PLAYGROUP REGULAR
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm text-neutral font-medium">
                {/* row 1 */}
                <tr>
                  <td>SENIN</td>
                  <td className="text-end">08:00 - 11:00</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>SELASA</td>
                  <td className="text-end">08:00 - 11:00</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>RABU</td>
                  <td className="text-end">08:00 - 11:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab11;
