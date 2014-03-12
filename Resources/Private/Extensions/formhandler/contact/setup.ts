plugin.Tx_Formhandler.settings.predef.formhandler-contactform {
	name = Contact Form
	formValuesPrefix = contact
	debug = {$plugin.theme_configuration.extensions.formhandler.contact.debug}

	langFile {
		1 = TEXT
		1.value = typo3conf/ext/modernpackage/Resources/Private/Language/locallang.xml
		2 = TEXT
		2.value = typo3conf/ext/modernpackage/Resources/Private/Extensions/formhandler/contact/language.xml
	}


	templateFile = TEXT
	templateFile.value = typo3conf/ext/modernpackage/Resources/Private/Extensions/formhandler/contact/html/template.html

	masterTemplateFile = TEXT
	masterTemplateFile.value = typo3conf/ext/modernpackage/Resources/Private/Extensions/formhandler/contact/html/mastertemplate.html

	singleErrorTemplate {
		totalWrap = <div class="error">|</div>
		singleWrap = <div class="help-block">|</div>
	}
	isErrorMarker {
		default = has-error
	}

	validators {
		1.class = Validator_Default
		1.config.fieldConf {
			firstName.errorCheck.1 = required
			lastName.errorCheck.1 = required
			street.errorCheck.1 = required
			zip.errorCheck.1 = required
			city.errorCheck.1 = required
			telephone.errorCheck.1 = required
			email.errorCheck.1 = required
			email.errorCheck.2 = email
			message.errorCheck.1 = required
		}
	}

	finishers {
		1.class = Finisher_Mail
		1.config {
			checkBinaryCrLf = message
			admin {
				templateFile = TEXT
				templateFile.value = typo3conf/ext/modernpackage/Resources/Private/Extensions/formhandler/contact/html/email-admin.html
				sender_email = {$plugin.theme_configuration.extensions.formhandler.contact.email.admin.sender_email}
				to_email = {$plugin.theme_configuration.extensions.formhandler.contact.email.admin.to_email}
				subject = TEXT
				subject.data = LLL:typo3conf/ext/modernpackage/Resources/Private/Extensions/formhandler/contact/language.xml:email_admin_subject
			}
		}

		5.class = Finisher_SubmittedOK
		5.config {
			returns = 1
		}
	}

}

[globalVar = LIT:1 = {$plugin.theme_configuration.extensions.formhandler.contact.sendEmailToUser}]
plugin.Tx_Formhandler.settings.predef.formhandler-contactform {
	finishers {
		1.config {
			user {
				templateFile = TEXT
				templateFile.value = typo3conf/ext/modernpackage/Resources/Private/Extensions/formhandler/contact/html/email-user.html
				sender_email = {plugin.theme_configuration.extensions.formhandler.contact.email.user.sender_email}
				to_email = email
				subject = TEXT
				subject.data = LLL:typo3conf/ext/modernpackage/Resources/Private/Extensions/formhandler/contact/language.xml:email_user_subject
			}
		}
	}
}
[global]
