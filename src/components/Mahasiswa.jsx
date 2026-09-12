function Mahasiswa({ id, name, age }) {
    return (
        <div>
            <p>ID_{id}: Halo, nama mahasiswa ini adalah {name}!</p>
            <p>Umur mahasiswa ini adalah {age} tahun.</p>
        </div>
    )
}

export default Mahasiswa