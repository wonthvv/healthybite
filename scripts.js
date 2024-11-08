// Asumiendo que ya tienes tus claves de Stripe
const stripe = Stripe('TU_CLAVE_PUBLICA_AQUI'); // Usa tu "publishable key" de Stripe

document.getElementById('checkout-button').addEventListener('click', function() {
    // Esto redirigirá a los usuarios a la página de pago de Stripe
    stripe.redirectToCheckout({
        sessionId: 'ID_DE_SESION_GENERADA' // Reemplaza con el ID de la sesión que creas en tu servidor
    }).then(function(result) {
        // Si hay un error en el pago, puedes manejarlo aquí
        if (result.error) {
            alert(result.error.message);
        }
    });
});
