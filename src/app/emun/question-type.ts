export enum QuestionType {
  parfait = 'Sois parfait',
  fort = 'Sois fort',
  vitesse = 'Dépèche-toi',
  plaisir = 'Fait plaisir',
  effort = 'Fait un effort'
}


  export function textePrincipal(questionType : QuestionType) {
    switch (questionType) {
      case QuestionType.parfait:
        return 'Vous pouvez avoir tendance à rechercher la perfection en toutes choses, que ce soit dans votre travail, vos relations ou votre apparence physique. Cependant, cette quête incessante de la perfection peut entraîner du stress, de l\'anxiété et une peur constante de l\'échec. 💔';
      case QuestionType.fort:
        return 'Vous pouvez avoir tendance à refouler vos émotions et à ne pas montrer votre vulnérabilité. Vous pouvez penser qu\'il est important de toujours rester fort et de ne jamais faiblir, même dans les moments difficiles. Cependant, cette croyance peut vous amener à vous isoler et à ne pas chercher l\'aide dont vous pourriez avoir besoin. 😔';
      case QuestionType.vitesse:
        return 'Vous pouvez ressentir de la pression pour agir rapidement et efficacement dans toutes les situations, que ce soit au travail, dans vos relations ou dans votre vie quotidienne. Cependant, cette croyance peut entraîner du stress, de l\'anxiété et même des erreurs si vous agissez trop rapidement sans prendre le temps de réfléchir. 💔';
      case QuestionType.plaisir:
        return 'Vous avez tendance à faire passer les besoins des autres avant les vôtres, dans l\'espoir de plaire et d\'être aimé.🎁 Cela peut vous conduire à accepter des tâches ou des responsabilités qui ne vous conviennent pas ou à ne pas exprimer vos opinions ou vos besoins, de peur de décevoir ou de froisser les autres. 🤝';
      case QuestionType.effort:
        return 'Vous pouvez avoir tendance à penser que tout ce qui en vaut la peine nécessite un effort immense.🌟  Cela peut vous amener à vous épuiser en essayant de tout faire parfaitement, ou à vous décourager si vous ne voyez pas immédiatement les résultats de vos efforts. 💔';
    }
  }

  
  export function texteSecondaire(questionType : QuestionType) {
    switch (questionType) {
      case QuestionType.parfait:
        return "💡 Il est important de vous rappeler que la perfection n'existe pas et que vous êtes humain(e) avec vos forces et vos faiblesses. Au lieu de chercher la perfection, vous pouvez vous concentrer sur la progression et l'amélioration continue. En effet, c'est souvent par l'erreur et l'échec que nous apprenons et que nous progressons. 🌟 <br><br> 👉 Pour vous libérer de cette croyance limitante, vous pouvez vous fixer des objectifs réalistes et réalisables, accepter vos imperfections et être bienveillant(e) envers vous-même. Vous pouvez également apprendre à célébrer vos réussites, même les plus petites, et à vous concentrer sur vos points forts plutôt que de vous focaliser sur vos faiblesses.<br><br> 👀 N'oubliez pas que vous êtes déjà suffisamment parfait(e) tel que vous êtes. Alors, pourquoi ne pas vous concentrer sur votre développement personnel et continuer à vous améliorer, plutôt que de chercher une perfection qui n'existe pas ? 💪";
      case QuestionType.fort:
        return "💡 Il est important de comprendre que la force ne réside pas dans le fait de tout supporter seul, mais plutôt dans la capacité à reconnaître ses propres limites et à demander de l'aide quand cela est nécessaire. Demander de l'aide est un signe de courage et de maturité, pas de faiblesse. 🌟 <br><br> 👉 Pour vous libérer de cette croyance limitante, vous pouvez commencer par reconnaître et accepter vos émotions, même les plus difficiles. N'oubliez pas que ressentir de la tristesse, de la colère ou de la peur est tout à fait normal et humain. Vous pouvez également chercher du soutien auprès de personnes de confiance, comme des amis, des membres de votre famille ou des professionnels de la santé mentale. Enfin, vous pouvez apprendre à vous accorder du temps pour prendre soin de vous et de votre bien-être émotionnel. 💪 <br><br> 👀 Souvenez-vous que la vraie force réside dans la capacité à être authentique, à demander de l'aide et à prendre soin de soi. Alors, pourquoi ne pas vous autoriser à être vulnérable de temps en temps et à chercher l'aide dont vous pourriez avoir besoin ? Vous en sortirez plus fort(e) que jamais ! 💫 ";
      case QuestionType.vitesse:
        return "💡 Il est important de se rappeler que prendre le temps de réfléchir et de planifier peut être bénéfique à long terme. Prendre le temps nécessaire pour faire les choses correctement peut réduire le stress et améliorer la qualité de votre travail et de vos relations. 🌟 <br><br> 👉 Pour se libérer de cette croyance limitante, vous pouvez apprendre à gérer votre temps efficacement, en planifiant à l'avance et en établissant des priorités. Vous pouvez également pratiquer la pleine conscience et prendre des pauses régulières pour vous détendre et vous recentrer. Enfin, n'oubliez pas que parfois, il est important de ralentir et de profiter du moment présent. ⏰ <br><br> 👀 Alors, pourquoi ne pas prendre le temps de vous détendre, de planifier et de savourer chaque moment plutôt que de vous précipiter constamment ? Vous verrez que cela peut être bénéfique pour vous et votre bien-être. 💪";
      case QuestionType.plaisir:
        return "💡 Il est important de se rappeler que prendre soin de soi-même est tout aussi important que de prendre soin des autres. Apprendre à dire non et à exprimer vos limites peut vous aider à vous sentir plus authentique et à renforcer vos relations interpersonnelles en évitant les ressentiments et les frustrations. 🌟 <br><br> 👉 Pour vous libérer de cette croyance limitante, vous pouvez commencer par vous accorder du temps pour vous-même et vous concentrer sur vos propres besoins. En prenant soin de vous, vous serez mieux équipé pour aider les autres de manière authentique et sans vous sentir épuisé ou sous pression. <br><br> 👀 N'oubliez pas que votre bien-être personnel est une priorité. En apprenant à vous écouter et à exprimer vos besoins, vous pourrez renforcer vos relations interpersonnelles en construisant des relations saines et équilibrées basées sur le respect mutuel. 💪";
      case QuestionType.effort:
        return "💡 Il est important de se rappeler que la réussite n'est pas toujours proportionnelle à l'effort que l'on y met. Parfois, des résultats étonnants peuvent être obtenus en faisant des changements mineurs dans notre approche. Il est également important de reconnaître que le perfectionnisme peut être un frein à notre progression, car il peut nous empêcher d'explorer de nouvelles idées ou de prendre des risques. 🤔 <br><br> 👉 Pour se libérer de cette croyance limitante, il est utile de se concentrer sur l'efficacité plutôt que sur l'effort. Cela signifie apprendre à identifier les tâches les plus importantes et à y consacrer notre temps et notre énergie, tout en laissant de la place pour le repos et la détente. Nous pouvons également apprendre à être plus tolérants envers nous-mêmes et à ne pas être trop exigeants. Enfin, il est important de célébrer les petites victoires et les progrès que nous faisons, plutôt que de nous concentrer sur les erreurs ou les échecs. 🎉 <br><br> 👀 N'oubliez pas que la vie n'est pas toujours facile, mais cela ne signifie pas que vous devez tout faire avec un effort immense. Apprenez à travailler intelligemment plutôt que dur, et souvenez-vous que chaque petite étape vous rapproche un peu plus de votre objectif. 💪";
    }
  }