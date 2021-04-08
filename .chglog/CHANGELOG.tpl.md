# {{ .Info.Title }}

{{ if .Versions -}} {{ if .Unreleased.CommitGroups -}}
<a name="unreleased"></a>

## Unreleased

{{ range .Unreleased.CommitGroups -}}

### {{ .Title }}

{{ range .Commits -}}

- [`{{ .Hash.Short }}`]({{ $.Info.RepositoryURL }}/commit/{{ .Hash.Long }}) {{ if .Scope }}**{{ .Scope }}:** {{ end }}{{
  .Subject }} {{ if .Body }} {{ .Body | replace "\n" "\n\t" }} {{ end -}} {{ end }} {{ end -}} {{ end -}} {{ end -}}

{{ range .Versions }}
<a name="{{ .Tag.Name }}"></a>

## {{ if .Tag.Previous }}[{{ .Tag.Name }}]({{ $.Info.RepositoryURL }}/compare/{{ .Tag.Previous.Name }}...{{ .Tag.Name }}){{ else }}{{ .Tag.Name }}{{ end }}

> {{ datetime "2006-01-02" .Tag.Date }}

{{ range .CommitGroups -}}

### {{ .Title }}
{{ range .Commits -}}

- [`{{ .Hash.Short }}`]({{ $.Info.RepositoryURL }}/commit/{{ .Hash.Long }}) {{ if .Scope }}**{{ .Scope }}:** {{ end }}{{
  .Subject }} {{ if .Body }} {{ .Body | replace "\n" "\n\t" }} {{ end -}} {{ end }} {{ end -}}

{{- if .RevertCommits -}}

### Reverts
{{ range .RevertCommits -}}

- [`{{ .Hash.Short }}`]({{ $.Info.RepositoryURL }}/commit/{{ .Hash.Long }}) {{ .Revert.Header }} {{ if .Body }} {{ .Body
  | replace "\n" "\n\t" }} {{ end -}} {{ end }} {{ end -}}

{{- if .MergeCommits -}}

### Pull Requests
{{ range .MergeCommits -}}

- [`{{ .Hash.Short }}`]({{ $.Info.RepositoryURL }}/commit/{{ .Hash.Long }}) {{ .Header }} {{ if .Body }} {{ .Body |
  replace "\n" "\n\t" }} {{ end -}} {{ end }} {{ end -}}

{{- if .NoteGroups -}} {{ range .NoteGroups -}}

### {{ .Title }}

{{ range .Notes }} {{ .Body }} {{ end }} {{ end -}} {{ end -}} {{ end -}}
