function RegisterPage() {
    return (
        <>
        <h1>Créer votre compte :</h1>

        <form>
            <>
            <label for="nom">Nom : </label>
            <input type="text" id="nom" name="nom" required ></input>
            </>
        </form>
        </>
    )
}

export default RegisterPage;