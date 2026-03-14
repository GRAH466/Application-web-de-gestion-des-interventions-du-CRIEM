<?php

namespace App\Controller;


use App\Entity\fiche_demande;
use App\Form\ficheDemande; 
use App\Entity\Administrateur;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;




class HomeController extends AbstractController
{
    #[Route('/', name: 'Accueil')]
    public function index(): Response
    {
        return $this->render('public/home/index.html.twig');
    }
     #[Route('/A-propos', name: 'Apropos')]
    public function about(): Response
    {
        return $this->render('public/home/Apropos.html.twig');
    }
   #[Route('/fiche-demande', name: 'fiche_demande')]
public function ficheDemande(Request $request, EntityManagerInterface $entityManager): Response
{
    if ($request->isMethod('POST')) {
        // Récupération des données
        $dateDem = $request->request->get('date_dem');
        $urg = $request->request->get('urg');
        $descr = $request->request->get('descr');
        $signStruc = $request->request->get('sign_struc');
        $nomStructure = $request->request->get('Nom_structure');

        // Validation
        if (!empty($dateDem) && !empty($urg) && !empty($descr) && !empty($signStruc) && !empty($nomStructure)) {
            try {
                // Insertion directe en base
                $sql = "INSERT INTO fiche_demande (date_dem, urg, descr, sign_struc, Nom_structure) 
                        VALUES (:date_dem, :urg, :descr, :sign_struc, :nom_structure)";
                
                $stmt = $entityManager->getConnection()->prepare($sql);
                $stmt->execute([
                    'date_dem' => $dateDem,
                    'urg' => $urg,
                    'descr' => $descr,
                    'sign_struc' => $signStruc,
                    'nom_structure' => $nomStructure
                ]);

                $this->addFlash('success', '✅ Fiche enregistrée avec succès!');
                return $this->redirectToRoute('fiche_demande');
                
            } catch (\Exception $e) {
                $this->addFlash('error', '❌ Erreur: ' . $e->getMessage());
            }
        } else {
            $this->addFlash('error', '⚠️ Tous les champs sont requis!');
        }
    }

    return $this->render('public/home/fiche.html.twig');
}
#[Route('/admin/login', name: 'Admin')]
public function login(Request $request, EntityManagerInterface $em): Response
{
    // Vérifie si le formulaire a été soumis
    if ($request->isMethod('POST')) {
        $email = $request->request->get('email');
        $password = $request->request->get('password');

        if (!$email || !$password) {
            $this->addFlash('error', 'Veuillez remplir tous les champs.');
            return $this->redirectToRoute('Admin');
        }

        $admin = $em->getRepository(Administrateur::class)->findOneBy(['email' => $email]);

        if (!$admin) {
            $this->addFlash('error', 'Email incorrect.');
            return $this->redirectToRoute('Admin');
        }

        if ($admin->getMotDePasse() !== $password) {
            $this->addFlash('error', 'Mot de passe incorrect.');
            return $this->redirectToRoute('Admin');
        }

        // Connexion réussie - redirection vers la page d'administration
        return $this->redirectToRoute('tableau');
    }

    // Affichage du formulaire pour les requêtes GET
    return $this->render('public/home/Admin.html.twig');
}
#[Route('/admin/tableau_de_bord', name: 'tableau')]
public function adminDashboard(): Response
{
    return $this->render('privée/tableau.html.twig');
}

}





